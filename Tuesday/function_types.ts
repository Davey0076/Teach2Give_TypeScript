type User = {
    id: string;
    name: string;
  };
  
  const modifyUser = (user: User[], id: string, makeChange: (user: User) => User,) => {
  //Parameter 'makeChange' implicitly has an 'any' type.
    return user.map((u) => {
      if (u.id === id) {
        return makeChange(u);
      }
  
      return u;
    });
  };