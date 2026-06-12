/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zvgt/hppmkpimonitor/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
