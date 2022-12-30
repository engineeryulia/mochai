let Authorizaton = require('../src/permissions')
require('chai').expect

describe('Authirization', () => {
  beforeEach (()=> {
    const pormissions = [
      {role: "superuser", name: "lock user account", active: true},
      {role: "superuser", name: "unlock user account", active: true},
      {role: "superuser", name: "purchase widgets", active: false},
      {role: "charger", name: "view pick up locations", active: true},
      {role: "rider", name: "view my profile", active: true},
      {role: "rider", name: "scooters near me", active: true},
    ]
    const users = [
      {id: 1, name: "Anna Administator", roles: ["superuser"]},
      {id: 2, name: "Charles N. Charge", roles: ["charger", "rider"]},
      {id: 7, name: "Ryder", roles: ["rider"]},
      {id: 11, name: "Unregistred Ulysses", roles: []},
      {id: 18, name: "Tessa Tester", roles: ["beta tester"]},
      
    ]
    this.authorization = new this.Authorization(permissions, users)
  })
  it("listPermissions returns correct permission names when there is one role", () => {
    const result = this.authorisation.listPermissions(7)
    expect(result, "view my profile"). to.include("view my profile")
    expect(result, "scooters near me"). to.include("scooters near me")
    expect(result.length). to.equal(2)
  })
});
