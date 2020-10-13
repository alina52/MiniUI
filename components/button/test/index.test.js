import React from "react";
import assert from "power-assert";
import { render,shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "../index";
import { LoadingIcon } from "../../icon";

describe("<Button/>", () => {
  it("should render a <Button/> components", () => {
    const wrapper = render(
      <div>
        <Button>Click</Button>
        <Button type="primary">Click</Button>
        <Button type="info">Click</Button>
        <Button type="warning">Click</Button>
        <Button type="error">Click</Button>
        <Button type="success">Click</Button>
        <Button disabled>Click</Button>
        <Button loading>Loading..</Button>
        <Button block>100%</Button>
        <Button circle>Circle</Button>
        <Button type="primary" size="large"> Large </Button>
        <Button type="info">Middle</Button>
        <Button type="warning" size="small"> small </Button>
      </div>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("should can trigger click event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button onClick={onClick}>Click</Button>);
    wrapper.find("button").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("should can not trigger click event", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClick} disabled>
        Disable
      </Button>
    );
    // simulate
    wrapper.find("button").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });

  it("should can not render loading icon when mode is circle", () => {
    const wrapper = shallow(
      <Button loading circle>
        mini-ui
      </Button>
    );
    assert(wrapper.find(LoadingIcon).length === 0);
    assert(wrapper.find(".mini-ui-button-loading").length === 0);
  });

  it("should render link", () => {
    const wrapper = shallow(<Button href="/">mini-ui</Button>);
    assert(wrapper.find(".mini-ui-button-link").length >= 1);
  });

  it("should can not click link when disabled", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button href="#" onClick={onClick} disabled>
        mini-ui
      </Button>
    );
    wrapper.find("a").simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });
});
