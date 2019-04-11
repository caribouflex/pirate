import React from "react";
import { shallow } from "enzyme";
import CommentsHeader, { IconButtonStyled } from "../CommentsHeader";
import { IconButton } from "@material-ui/core";

describe("<CommentsHeader />", () => {
  let wrapper;
  const onBackClick = jest.fn();
  const onCloseClick = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <CommentsHeader
        parentId={1}
        onBackClick={onBackClick}
        onCloseClick={onCloseClick}
      />
    );
  });

  it("Should render without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Should contain <IconButton /> component", () => {
    expect(wrapper.find(IconButton).length).toBe(1);
  });

  it("Should contain <IconButtonStyled /> component", () => {
    expect(wrapper.find(IconButtonStyled).length).toBe(1);
  });

  it("Should call onBackClick callback", () => {
    wrapper.find(IconButtonStyled).simulate("click");
    expect(onBackClick).toBeCalled();
  });

  it("Should call onCloseClick callback", () => {
    wrapper.find(IconButton).simulate("click");
    expect(onCloseClick).toBeCalled();
  });
});
