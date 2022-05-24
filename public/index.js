function Spa() {
  const [user, setUser]=React.useState('');
  const [userName, setUserName]=React.useState('');
  if(user.length==0){
    return (
      <HashRouter>
        <div>              
          <UserContext.Provider value={{user, setUser, userName, setUserName}}>
            <NavBar/>  
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
            </div>
          </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  else{
    return (
      <HashRouter>
        <div>              
        <UserContext.Provider value={{user, setUser, userName, setUserName}}>
            <NavBar/>  
            <div className="container" style={{padding: "20px"}}>
              <Route path="/" exact component={Home} />
              <Route path="/CreateAccount/" component={CreateAccount} />
              <Route path="/login/" component={Login} />
              <Route path="/deposit/" component={Deposit} />
              <Route path="/withdraw/" component={Withdraw} />
              {/* <Route path="/transactions/" component={Transactions} /> */}
              <Route path="/balance/" component={Balance} />
              <Route path="/alldata/" component={AllData} />
            </div>
          </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
