'use strict';

ui.Label = function(parent, element) {
  ui.Widget.call(this, parent, element);
};

ui.Label.prototype = Object.create(ui.Widget.prototype);

ui.Label.prototype.text = function(text) {
  if (text === undefined) {
    return this._element.text();
  } else {
    this._element.text(text);
  }
};

ui.Label.prototype.html = function(html) {
  if (html === undefined) {
    return this._element.html();
  } else {
    this._element.html(html);
  }
};

ui.label = function(parent, element) {
  if (typeof(element) === 'string') {
    element = parent._element.find(element);
  }

  return new ui.Label(parent, element);
};
