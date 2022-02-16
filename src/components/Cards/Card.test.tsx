import React from "react";
import Card from "./Card";
import { mount, shallow } from "enzyme";

import "./Card.css";
import { render } from "@testing-library/react";
const user = {
    name: "John Doe",
    email: "johndoe@email.com",
};

describe("Tests card shallow test", () => {
  it("should render", () => {
    
    const wrapper = shallow(<Card {...(user as any)} />);
    expect(wrapper.text()).toBe("John Doe");
  });
});

describe("Tests card deep test (mount)", () => {
  it("should render", () => {

    const wrapper = mount(<Card {...(user as any)} />);

    const listItem = wrapper.find("li");
    listItem.simulate("click");

    wrapper.update();
    const cardContent = wrapper.find(".card-content");

    expect(cardContent.text()).toBe(user.email);
  });
});

describe("RTL test sample", () => {
    it("should render", () => {
        const wrapper = render(<Card {...(user as any)} />);
        expect(wrapper.getByText(user.name)).toBeInTheDocument();

        wrapper.getByText(user.name).click();
        
        expect(wrapper.getByText(user.email)).toBeInTheDocument();
    });
})
