import React from "react";
import "@testing-library/jest-dom";
import { mount } from "enzyme";
import { Navbar } from "../../../components/ui/NavBar";
import { AuthContext } from "../../../auth/AuthContex";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../types/types";

describe("Pruebas en <Navbar/>", () => {
  const historyMock = {
    push: jest.fn(),
    listen: jest.fn(),
    location: {},
    createHref: jest.fn(),
    replace: jest.fn(),
  };

  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: "Pedro" },
  };
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("debe mostrarse correctamente ", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Pedro");
  });
  test("debe de llamar el logout y usar history", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      type: types.logout,
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
