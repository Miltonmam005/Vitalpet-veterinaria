import {
  useButtonProps
} from "./chunk-NOAYIGFG.js";
import {
  require_classnames,
  useBootstrapPrefix
} from "./chunk-YRB3UB4T.js";
import {
  require_jsx_runtime
} from "./chunk-7L625E6A.js";
import {
  require_react
} from "./chunk-E2VN4SNS.js";
import {
  __toESM
} from "./chunk-V4OQ3NZ2.js";

// node_modules/react-bootstrap/esm/Button.js
var import_classnames = __toESM(require_classnames());
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Button = React.forwardRef(({
  as,
  bsPrefix,
  variant = "primary",
  size,
  active = false,
  disabled = false,
  className,
  ...props
}, ref) => {
  const prefix = useBootstrapPrefix(bsPrefix, "btn");
  const [buttonProps, {
    tagName
  }] = useButtonProps({
    tagName: as,
    disabled,
    ...props
  });
  const Component = tagName;
  return (0, import_jsx_runtime.jsx)(Component, {
    ...buttonProps,
    ...props,
    ref,
    disabled,
    className: (0, import_classnames.default)(className, prefix, active && "active", variant && `${prefix}-${variant}`, size && `${prefix}-${size}`, props.href && disabled && "disabled")
  });
});
Button.displayName = "Button";
var Button_default = Button;

export {
  Button_default
};
//# sourceMappingURL=chunk-44XX3ZUV.js.map
