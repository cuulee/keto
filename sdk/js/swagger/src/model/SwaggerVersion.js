/**
 * ORY Keto
 * A cloud native access control server providing best-practice patterns (RBAC, ABAC, ACL, AWS IAM Policies, Kubernetes Roles, ...) via REST APIs.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryKeto) {
      root.OryKeto = {};
    }
    root.OryKeto.SwaggerVersion = factory(root.OryKeto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SwaggerVersion model module.
   * @module model/SwaggerVersion
   * @version Latest
   */

  /**
   * Constructs a new <code>SwaggerVersion</code>.
   * SwaggerVersion swagger version
   * @alias module:model/SwaggerVersion
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SwaggerVersion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SwaggerVersion} obj Optional instance to populate.
   * @return {module:model/SwaggerVersion} The populated <code>SwaggerVersion</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
    }
    return obj;
  }

  /**
   * Version is the service's version.
   * @member {String} version
   */
  exports.prototype['version'] = undefined;



  return exports;
}));


