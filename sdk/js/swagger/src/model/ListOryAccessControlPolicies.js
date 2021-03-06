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
    root.OryKeto.ListOryAccessControlPolicies = factory(root.OryKeto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListOryAccessControlPolicies model module.
   * @module model/ListOryAccessControlPolicies
   * @version Latest
   */

  /**
   * Constructs a new <code>ListOryAccessControlPolicies</code>.
   * ListOryAccessControlPolicies list ory access control policies
   * @alias module:model/ListOryAccessControlPolicies
   * @class
   * @param flavor {String} The ORY Access Control Policy flavor. Can be \"regex\", \"glob\", and \"exact\"  in: path
   */
  var exports = function(flavor) {
    var _this = this;

    _this['flavor'] = flavor;


  };

  /**
   * Constructs a <code>ListOryAccessControlPolicies</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListOryAccessControlPolicies} obj Optional instance to populate.
   * @return {module:model/ListOryAccessControlPolicies} The populated <code>ListOryAccessControlPolicies</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('flavor')) {
        obj['flavor'] = ApiClient.convertToType(data['flavor'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ORY Access Control Policy flavor. Can be \"regex\", \"glob\", and \"exact\"  in: path
   * @member {String} flavor
   */
  exports.prototype['flavor'] = undefined;
  /**
   * The maximum amount of policies returned.  in: query
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * The offset from where to start looking.  in: query
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;



  return exports;
}));


