function getUserInfo(user) {
    const { id } = user;
    const { name } = user.profile || {};
    const { city } = user.profile?.address || {};
    const { zipcode } = user.profile?.address || {};
  
    const cityStr = city ? city : "Information not available";
    const zipcodeStr = zipcode ? zipcode : "Information not available";
  
    return `User ${name} (ID: ${id}) lives in ${cityStr} (ZIP: ${zipcodeStr})`;
  }
  
  // given Example usage
  const user1 = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
  const user2 = { id: 123, profile: { name: "Jane Smith" } };
  
  console.log(getUserInfo(user1)); 
  console.log(getUserInfo(user2));

  // user 1 output
//User John Doe (ID: 123) lives in Los Angeles (ZIP: 90001)

// user2 output
//User Jane Smith (ID: 123) lives in Information not available (ZIP: Information not available)