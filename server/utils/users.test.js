const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'TesterOne',
        room: 'Test room one'
      }, {
        id: '2',
        name: 'TesterTwo',
        room: 'Test room two'
      }, {
        id: '3',
        name: 'TesterThree',
        room: 'Test room one'
      }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Tester',
      room: 'test room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('2');

    expect(user).toEqual({id: '2', name: 'TesterTwo', room: 'Test room two'});
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', () => {
    var user = users.removeUser('-1');

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser('3');

    expect(user).toEqual(users.users[2]);
  });

  it('should not find user', () => {
    var user = users.getUser(1000);

    expect(user).toBeFalsy();
  });

  it('should return names for Test room one', () => {
    var userList = users.getUserList('Test room one');

    expect(userList).toEqual(['TesterOne', 'TesterThree']);
  });

  it('should return names for Test room two', () => {
    var userList = users.getUserList('Test room two');

    expect(userList).toEqual(['TesterTwo']);
  });
});
