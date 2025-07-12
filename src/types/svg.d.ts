declare module "*.svg" {
  import React = require('react');
  import { IconProps } from "@radix-ui/react-icons";
  export const ReactComponent: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  const src: string;
  export default src;
}