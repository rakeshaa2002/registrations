useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/registrations/');
        console.log("Users:", res.data);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Could not connect to backend.");
      }
    };
  
    fetchUsers();
  }, []);
  