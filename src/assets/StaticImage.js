/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var clearOwnProperties = require('../util/clearOwnProperties');

/**
 * @class StaticImageAsset
 * @implements Asset
 * @classdesc
 *
 * Static asset containing an HTML image element.
 *
 * @param {Element} element
 */
function StaticImageAsset(element) {
  this._element = element;
}

StaticImageAsset.prototype.dynamic = false;

/**
 * Destructor.
 */
StaticImageAsset.prototype.destroy = function() {
  clearOwnProperties(this);
};

StaticImageAsset.prototype.element = function() {
  return this._element;
};

StaticImageAsset.prototype.width = function() {
  // TODO: Would need fallback to work on IE8. Right now it's not necessary
  // since IE8 uses FlashImageAsset.
  return this._element.naturalWidth;
};

StaticImageAsset.prototype.height = function() {
  // TODO: Would need fallback to work on IE8. Right now it's not necessary
  // since IE8 uses FlashImageAsset.
  return this._element.naturalHeight;
};

StaticImageAsset.prototype.timestamp = function() {
  return 0;
};

module.exports = StaticImageAsset;
