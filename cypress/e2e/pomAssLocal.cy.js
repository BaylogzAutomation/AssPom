describe('POM LOCAL TEST',()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Verify user can select and type in the username and password fields',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
        })
    })

    it('Verify user can login with correct username and password',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
        })
    })

    it('Verify user cannot login with invalid username and password',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.invalidUser)
            cy.get(gl.passwordField).type(gl.invalidPassword)
            cy.get(gl.loginButton).click()
        })
    })

    it('Verify inventory container is visible to user',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.inventoryContainer).and('be.visible')
        })
    })

    it('Verify inventory description is visible to user',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.inventoryDesc).and('be.visible')
        })
    })

    it('Verify user can view each product and return to inventory list',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.viewBackPack).click()
            cy.get(gl.backToProduct).click()
            cy.get(gl.viewBikeLight).click()
            cy.get(gl.backToProduct).click()
            cy.get(gl.viewBoltTshirt).click()
            cy.get(gl.backToProduct).click()
            cy.get(gl.viewFleeceJacket).click()
            cy.get(gl.backToProduct).click()
            cy.get(gl.viewOnesie).click()
            cy.get(gl.backToProduct).click()
            cy.get(gl.viewTshirtRed).click()
            cy.get(gl.backToProduct).click()
        })
    })

    it('Verify user can add all products to cart',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()

        })
    })

    it('Verify user can select cart to view added products',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
        })
    })

    it('Verify user can click continue shopping after viewing product',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.continueShopping).click()
        })
    })

    it('Verify user can checkout products added to cart',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
        })
    })

    it('Verify user can input in the first name, last name and zip/postal code field',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
        })
    })
    
    it('Verify user can click the continue button filling fields',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
        })
    })

    it('Verify user cannot proceed to the next page without filling the zip/postal code fields',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.continueButton).click()
        })
    })

    it('Verify user gets visible and accurate subtotal, tax amount, and sum total',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
            cy.get(gl.subTotal).should('be.visible').and('have.text', 'Item total: $129.94')
            cy.get(gl.taxLabel).should('be.visible').and('have.text', 'Tax: $10.40')
            cy.get(gl.sumTotal).should('be.visible').and('have.text', 'Total: $140.34')
        })
    })

    it('Verify user can cancel order by clicking the cancel button',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
            cy.get(gl.cancelOrder).click()
        })
    })

    it('Verify user can complete order by clicking the finish button',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
            cy.get(gl.finishButton).click()
        })
    })

    it('Verify user can return home after completing order',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
            cy.get(gl.finishButton).click()
            cy.get(gl.homeButton).click()
        })
    })

    it('Verify user can logout successfully',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.backPack).click()
            cy.get(gl.bikeLight).click()
            cy.get(gl.boltTshirt).click()
            cy.get(gl.fleeceJacket).click()
            cy.get(gl.onesie).click()
            cy.get(gl.tshirtRed).click()
            cy.get(gl.cartButton).click()
            cy.get(gl.checkoutButton).click()
            cy.get(gl.firstnameField).type(gl.firstName)
            cy.get(gl.lastnameField).type(gl.lastName)
            cy.get(gl.postalcodeField).type(gl.postalCode)
            cy.get(gl.continueButton).click()
            cy.get(gl.subTotal).should('be.visible')
            cy.get(gl.taxLabel).should('be.visible')
            cy.get(gl.sumTotal).should('be.visible')
            cy.get(gl.finishButton).click()
            cy.get(gl.homeButton).click()
            cy.get(gl.reactBurger).click()
            cy.get(gl.logoutButton).click()
        })
    })

    it('Verify user can twitter icon redirects to actual website upon click',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.twitterIcon).click()
        })
    })

    it('Verify user can facebook icon redirects to actual website upon click',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.facebookIcon).click()
        })
    })

    it('Verify user can linkedin icon redirects to actual website upon click',()=>{
        cy.fixture('pomSelectorGL').then((gl)=>{
            cy.get(gl.usernameField).type(gl.standardUser)
            cy.get(gl.passwordField).type(gl.password)
            cy.get(gl.loginButton).click()
            cy.get(gl.linkedinIcon).click()
        })
    })
   
})