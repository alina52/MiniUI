"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _icon = require("../icon");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var types = {
  success: "success",
  error: "error",
  warning: "warning",
  default: "default",
  primary: "primary",
  link: "link",
  info: "info"
};
var sizes = {
  small: "small",
  default: "default",
  large: "large"
};

var Button = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    (0, _classCallCheck2.default)(this, Button);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      var _cls3;

      var _this$props = this.props,
          type = _this$props.type,
          children = _this$props.children,
          prefixCls = _this$props.prefixCls,
          disabled = _this$props.disabled,
          block = _this$props.block,
          onClick = _this$props.onClick,
          href = _this$props.href,
          dashed = _this$props.dashed,
          loading = _this$props.loading,
          hollow = _this$props.hollow,
          size = _this$props.size,
          circle = _this$props.circle,
          className = _this$props.className,
          attr = (0, _objectWithoutProperties2.default)(_this$props, ["type", "children", "prefixCls", "disabled", "block", "onClick", "href", "dashed", "loading", "hollow", "size", "circle", "className"]);
      var isDisabled = disabled ? {
        disabled: true
      } : {
        onClick: onClick
      };

      if (href) {
        return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
          href: disabled ? "javascript:void(0);" : href,
          disabled: disabled,
          className: (0, _classnames.default)("".concat(prefixCls, "-link"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-link-disabled"), disabled))
        }, attr), children);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classnames.default)(prefixCls, (0, _defineProperty2.default)({}, "".concat(prefixCls, "-block"), block))
      }, /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
        type: "button"
      }, isDisabled, {
        className: (0, _classnames.default)("".concat(prefixCls, "-btn"), className, "".concat(prefixCls, "-btn-").concat(type), (_cls3 = {
          'btn-hollow': hollow,
          'btn-disabled': disabled,
          'btn-block': block,
          'btn-dashed': dashed,
          'btn-loading': loading
        }, (0, _defineProperty2.default)(_cls3, "btn-size-".concat(size), size !== sizes.default), (0, _defineProperty2.default)(_cls3, 'btn-circle', circle), _cls3))
      }, attr), !circle && loading && /*#__PURE__*/_react.default.createElement(_icon.LoadingIcon, {
        className: "".concat(prefixCls, "-loading")
      }), /*#__PURE__*/_react.default.createElement("span", null, children)));
    }
  }]);
  return Button;
}(_react.Component);

(0, _defineProperty2.default)(Button, "propTypes", {
  prefixCls: _propTypes.default.string.isRequired,
  type: _propTypes.default.oneOf(Object.values(types)),
  disabled: _propTypes.default.bool,
  block: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  href: _propTypes.default.string,
  dashed: _propTypes.default.bool,
  loading: _propTypes.default.bool,
  hollow: _propTypes.default.bool,
  circle: _propTypes.default.bool,
  size: _propTypes.default.oneOf(Object.values(sizes))
});
(0, _defineProperty2.default)(Button, "defaultProps", {
  prefixCls: "mini-ui-button",
  type: types.default,
  disabled: false,
  href: "",
  dashed: false,
  block: false,
  loading: false,
  hollow: false,
  circle: false,
  size: sizes.default,
  onClick: function onClick() {}
});
var _default = Button;
exports.default = _default;