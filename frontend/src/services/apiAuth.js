export async function registerUser(registerData, requestUrl) {
  const url = `/${requestUrl}`;

  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  if (!response.ok) {
    return { message: "user not registerred" };
  }
  return { message: "user registerred successful." };
}

export async function loginUser(loginData) {
  const response = await fetch("/signin", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  });

  if (!response.ok) {
    return { message: "can't login" };
  }
  return { message: "user login successful." };
}
