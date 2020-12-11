const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  // Act
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  // Arrange
  const result = e.github
  // Assert
  expect(result).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  // Act
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  // Arrange
  const result = e.getRole()
  // Assert
  expect(result).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  // Act
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  // Arrange
  const result = e.getGithub()
  // Assert
  expect(result).toBe(testValue);
});
