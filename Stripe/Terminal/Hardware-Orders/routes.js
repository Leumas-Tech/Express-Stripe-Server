const express = require('express');
const router = express.Router();
const controller = require('./controllers');

router.get('/terminal/hardware_orders/preview', controller.previewHardwareOrders);
router.post('/terminal/hardware_orders', controller.createHardwareOrder);
router.get('/terminal/hardware_orders/:id', controller.retrieveHardwareOrder);
router.get('/terminal/hardware_orders', controller.listHardwareOrders);
router.post('/terminal/hardware_orders/:id/cancel', controller.cancelHardwareOrder);
router.post('/test_helpers/terminal/hardware_orders/:id/mark_ready_to_ship', controller.markReadyToShip);
router.post('/test_helpers/terminal/hardware_orders/:id/ship', controller.shipHardwareOrder);
router.post('/test_helpers/terminal/hardware_orders/:id/deliver', controller.deliverHardwareOrder);
router.post('/test_helpers/terminal/hardware_orders/:id/mark_undeliverable', controller.markUndeliverable);

module.exports = router;
