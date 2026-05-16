import express from 'express';

import { buildSystemPrompt } from '../prompts/systemPrompt.js';

import { callClaude } from '../services/llmService.js';

import {
  resizeArtboard,
  moveNode,
  resizeNode,
  findHeadlineNode,
  findBadgeNode,
  findProductNode,
} from '../services/layoutTransforms.js';

import { validateLayout } from '../utils/jsonValidator.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { message, layout, history } = req.body;

    // Build prompt
    const systemPrompt = buildSystemPrompt(layout);

    // Claude response
    const result = await callClaude(
      systemPrompt,
      history,
      message
    );

    // Clone safely
    let updatedLayout = structuredClone(layout);

    /*
      ============================
      RESIZE ARTBOARD
      ============================
    */

    if (result.action === 'resize_artboard') {
      updatedLayout = resizeArtboard(
        updatedLayout,
        result.width,
        result.height
      );
    }

    /*
      ============================
      MOVE NODE
      ============================
    */

    if (result.action === 'move_node') {
      let node;

      if (result.target === 'headline') {
        node = findHeadlineNode(updatedLayout);
      }

      if (result.target === 'badge') {
        node = findBadgeNode(updatedLayout);
      }

      if (result.target === 'product') {
        node = findProductNode(updatedLayout);
      }

      if (node) {
        updatedLayout = moveNode(
          updatedLayout,
          node.id,
          result.position
        );
      }
    }

    /*
      ============================
      RESIZE NODE
      ============================
    */

    if (result.action === 'resize_node') {
      let node;

      if (result.target === 'headline') {
        node = findHeadlineNode(updatedLayout);
      }

      if (result.target === 'badge') {
        node = findBadgeNode(updatedLayout);
      }

      if (result.target === 'product') {
        node = findProductNode(updatedLayout);
      }

      if (node) {
        updatedLayout = resizeNode(
          updatedLayout,
          node.id,
          result.scale
        );
      }
    }

    /*
      ============================
      VALIDATE FINAL JSON
      ============================
    */

    validateLayout(updatedLayout);

    /*
      ============================
      RESPONSE
      ============================
    */

    return res.json({
      updatedLayout,
      explanation:
        result.message ||
        'Layout updated successfully',
    });
  } catch (error) {
    console.log('CHAT ROUTE ERROR:', error);

    return res.status(500).json({
      error: 'Something went wrong',
    });
  }
});

export default router;