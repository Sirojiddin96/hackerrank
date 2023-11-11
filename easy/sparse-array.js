function matchingStrings(stringList, queries) {
  const count = queries.map((query, _) => {
    const filtered = stringList.filter((string) => string === query);
    return filtered.length;
  });
  return count;
}

matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"]);
