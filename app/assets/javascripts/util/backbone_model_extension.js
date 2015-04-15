(function () {
  'use strict';

  var model_proto = Backbone.Model.prototype;

  // save reference to the original functions
  var backbone_get = model_proto.get;
  var backbone_set = model_proto.set;
  var backbone_toJSON = model_proto.toJSON;

  _.extend(model_proto, { getters: {}, setters: {} });

  model_proto.get = function (attr) {
    if (_.isFunction(this.getters[attr])) {
      return this.getters[attr].call(this);
    }

    return backbone_get.call(this, attr);
  };

  model_proto.set = function (key, value, options) {
    var self = this;
    var attrs;

    // Normalize the key-value into an object
    if (_.isObject(key) || key === null) {
      attrs = key;
      options = value;
    } else {
      attrs = {};
      attrs[key] = value;
    }

    // This allows modifying the options inside the setter
    options = options || {};

    // Go over all the setter attributes and call the setter if available
    _.each(_.keys(attrs), function (attr) {
      if (_.isFunction(self.setters[attr])) {
        attrs[attr] = self.setters[attr].call(self, attrs[attr], options);
      }
    });

    return backbone_set.call(self, attrs, options);
  };

  model_proto.toJSON = function () {
    var json = backbone_toJSON.call(this);

    _.each(this.getters, function (prop, key) {
      json[key] = this.get(key);
    }.bind(this));

    return json;
  };

  model_proto.viewAttrs = function () {
    if (_.isUndefined(this.clientProps)) { return backbone_toJSON.call(this); }

    var json = {};
    _.each(this.clientProps, function (prop) {
      json[prop] = this.get(prop);
    }.bind(this));
    return json;
  };
})();
