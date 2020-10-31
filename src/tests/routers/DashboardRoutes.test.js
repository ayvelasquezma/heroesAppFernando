import React from "react";
import { shallow, mount } from "enzyme";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContex";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <DashboardRoutes/>", () => {
  const contextValue = {
    dispatch: jest.fn(),
    user: { logged: true, name: "Pedro" },
  };
  test("debe mostrarse correctamente ", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Pedro");
  });
});
