export function rot(s) {
  if (s !== "" || s.typeof !== "string") {
    return s.replace(/[a-zA-Z]/g, function (char) {
      return String.fromCharCode(
        (char <= "Z" ? 90 : 122) >= (char = char.charCodeAt(0) + 13)
          ? char
          : char - 26
      );
    });
  }
}
