
const {  Then, When} = require('@badeball/cypress-cucumber-preprocessor')
const PagniationFun = require('../../pages/PagniationFun')


const pagniationFun = new PagniationFun()



Then(/^the user should see the "([^"]*)" heading$/, (heading) => {
	pagniationFun.getHeadingByText(heading).should('have.text',heading)
})



Then(/^the user should see the "([^"]*)" paragraph$/, (paragraph) => {
	pagniationFun.paragraph().should('have.text',paragraph)
})


Then(/^the user should see the "([^"]*)" button is disabled$/, (bttn) => {
	pagniationFun.getBttnByName(bttn).should('be.disabled')
})


Then(/^the user should see the "([^"]*)" button is enabled$/, (nextBtn) => {
	pagniationFun.getBttnByName(nextBtn).should('be.enabled')
})



When(/^the user clicks on the "([^"]*)" button$/, () => {
	pagniationFun.nextBttnClick()
})



When(/^the user clicks on the "([^"]*)" button till it becomes disabled$/, (bttn) => {

	pagniationFun.getBttnByName(bttn).click()
	pagniationFun.getBttnByName(bttn).click()
	pagniationFun.getBttnByName(bttn).click()
	pagniationFun.getBttnByName(bttn).should('be.disabled')

})


Then(/^the user should see "([^"]*)" City with the info below and an image$/, (city,dataTable) => {

	pagniationFun.cityImage().should('have.attr','alt',city)

	const cityData = dataTable.rawTable.flat()

	pagniationFun.data().each((el, index) => {
		cy.wrap(el).should('have.text',cityData[index])
	})
})
