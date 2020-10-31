import { authReducer } from "../../auth/authReducer";
import { types } from "../types/types";

describe("Pruebas en authReducer", () => {
  test("debe retornar el estado por defecto", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });
  test("debe de autenticar y colocar el name del usuario", () => {
    const state = authReducer(
      {},
      { type: types.login, payload: { name: "Fernando" } }
    );
    expect(state).toEqual({ logged: true, name: "Fernando" });
  });

  test("debe de borrar el name del usuario y logged en false", () => {
    const state = authReducer(
      { logged: true, name: "Fernando" },
      { type: types.logout }
    );
    expect(state).toEqual({ logged: false });
  });
});
