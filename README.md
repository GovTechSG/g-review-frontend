# Product Review Platform

**This project has been ported over to another repository for maintenance. As a result, this repo will be archived and made read-only.**

<a href="https://teamcity.gahmen.tech/viewType.html?buildTypeId=ProductReviewPlatform_UnitTest&guest=1"> 
<img src="https://teamcity.gahmen.tech/app/rest/builds/buildType(id:ProductReviewPlatform_UnitTest)/statusIcon"/>
</a>

<img src="public/favicon.png" width="96" />

# GRP-React

Welcome! This document details the setting up of a development environment. The project uses the following frameworks:

* [Getting started with React](https://facebook.github.io/react/docs/getting-started.html)

# Setup

1. Clone the project

	cd into the location you would like to clone the project to

	run this command on terminal: 

		git clone https://github.com/GovTechSG/govt-review-frontend

1. Configure project

	cd into the root directory of the project

	run these commands on terminal: 

		npm install
  
1. Test run

	Ensure that the [**backend**](https://github.com/GovTechSG/product-review-platform) is running first on http://localhost:3000/.

	Then in the project root directory of the [**frontend**](https://github.com/GovTechSG/govt-review-frontend),

	- Test if the project is setup properly:
		
			npm start

	- open http://localhost:5000/ on your browser. you should see a login page.

	- Login with credentials:
		
			username: bgp
			password: test12
	- If authentication fails, check that the [**backend**](https://github.com/GovTechSG/product-review-platform) is running and that the database has been seeded

1. Sanity Check

	- To run sanity check, run:

			npm test
			npm run eslint
