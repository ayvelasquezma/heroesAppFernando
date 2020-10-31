import React from "react";
import { shallow, mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContex";

describe("Pruebas en <AppRouter/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: false },
  };

  test("debe de mostrar el login si no e4sta autenticado", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
  test("debe de mostrar el componente de marvel si esta autenticado", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: { logged: true, name: "Pedro" },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper.find(".navbar").exists()).toBe(true);
  });
});
