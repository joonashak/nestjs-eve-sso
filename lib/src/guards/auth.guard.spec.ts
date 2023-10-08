import { EVE_AUTH_SESSION_USER_ESI_ID_KEY } from "../constants";
import { mockContextWithSession } from "../test-utils/mock-context";
import { AuthGuard } from "./auth.guard";

describe("TokenAuthGuard", () => {
  let guard: AuthGuard;

  beforeEach(() => {
    guard = new AuthGuard();
  });

  it("Allows access with existing user ID in session data", () => {
    const ctx = mockContextWithSession({
      [EVE_AUTH_SESSION_USER_ESI_ID_KEY]: "asd",
    });
    expect(guard.canActivate(ctx)).toBeTruthy();
  });

  it("Denies access with missing user ID in session data", () => {
    const ctx = mockContextWithSession({});
    expect(guard.canActivate(ctx)).toBeFalsy();
  });

  it("Denies access with empty user ID in session data", () => {
    const ctx = mockContextWithSession({
      [EVE_AUTH_SESSION_USER_ESI_ID_KEY]: "",
    });
    expect(guard.canActivate(ctx)).toBeFalsy();
  });

  it("Denies access with undefined user ID in session data", () => {
    const ctx = mockContextWithSession({
      [EVE_AUTH_SESSION_USER_ESI_ID_KEY]: undefined,
    });
    expect(guard.canActivate(ctx)).toBeFalsy();
  });
});
