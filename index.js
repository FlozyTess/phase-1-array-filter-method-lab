function findMatching(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => 
      driver.startsWith(query)
    );
  }
  function matchName(drivers, query) {
    return drivers.filter(driver => 
      driver.name === query
    );
  }
  const drivers = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sammy", hometown: "Los Angeles" },
    { name: "Sally", hometown: "San Francisco" },
    { name: "Annette", hometown: "Houston" },
    { name: "Bobby", hometown: "Tampa Bay" }
  ];
  
  // Test findMatching
  console.log(findMatching(["Bobby", "Sammy", "Sally"], "bobby")); 
  // Output: ["Bobby"]
  
  // Test fuzzyMatch
  console.log(fuzzyMatch(["Bobby", "Sammy", "Sally"], "Sa")); 
  // Output: ["Sammy", "Sally"]
  
  // Test matchName
  console.log(matchName(drivers, "Bobby")); 
  // Output: [{ name: "Bobby", hometown: "New York" }, { name: "Bobby", hometown: "Tampa Bay" }]
  
