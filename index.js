const getMax = object => {
        return Object.keys(object).filter(x => {
             return object[x] == Math.max.apply(null, 
             Object.values(object));
       })
}


let testObj =  {
  '1900': 1,
  '1901': 1,
  '1902': 1,
  '1903': 1,
  '1904': 1,
  '1905': 1,
  '1906': 1,
  '1907': 1,
  '1908': 1,
  '1909': 1,
  '1910': 2,
  '1911': 2,
  '1912': 2,
  '1913': 2,
  '1914': 2,
  '1915': 2,
  '1916': 2,
  '1917': 2,
  '1918': 2,
  '1919': 2,
  '1920': 2,
  '1921': 2,
  '1922': 2,
  '1923': 2,
  '1924': 2,
  '1925': 2,
  '1926': 2,
  '1927': 2,
  '1928': 2,
  '1929': 2,
  '1930': 2,
  '1931': 2,
  '1932': 2,
  '1933': 2,
  '1934': 2,
  '1935': 2,
  '1936': 2,
  '1937': 2,
  '1938': 2,
  '1939': 2,
  '1940': 2,
  '1941': 2,
  '1942': 2,
  '1943': 2,
  '1944': 2,
  '1945': 3,
  '1946': 3,
  '1947': 3,
  '1948': 3,
  '1949': 3,
  '1950': 3,
  '1951': 2,
  '1952': 1,
  '1953': 1,
  '1954': 1,
  '1955': 1,
  '1956': 1,
  '1957': 1,
  '1958': 1,
  '1959': 1,
  '1960': 1,
  '1961': 1,
  '1962': 1,
  '1963': 1,
  '1964': 1,
  '1965': 1,
  '1966': 1,
  '1967': 1,
  '1968': 1,
  '1969': 1,
  '1970': 1,
  '1971': 1,
  '1972': 1,
  '1973': 1,
  '1974': 1,
  '1975': 1,
  '1976': 1,
  '1977': 1,
  '1978': 1,
  '1979': 1,
  '1980': 1,
  '1981': 1,
  '1982': 1,
  '1983': 1,
  '1984': 1,
  '1985': 1,
  '1986': 1,
  '1987': 1,
  '1988': 1,
  '1989': 1,
  '1990': 1,
  '1991': 1,
  '1992': 1,
  '1993': 1,
  '1994': 1,
  '1995': 1,
  '1996': 1,
  '1997': 1,
  '1998': 1,
  '1999': 1,
  '2000': 1
}


console.log(getMax(testObj));
