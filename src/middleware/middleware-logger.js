const middlewareLogger = store => next => action => {
  console.log('State', store.getState());
  console.log('Action:', action);
  next(action);
  console.log('new state:', store.getState());
};

export default middlewareLogger;