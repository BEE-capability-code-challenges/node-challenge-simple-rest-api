### Functional Requirements

1. The aim of this version of the API (v1) is to have the following functionality:
* CRUD operations about pet profiles
    * GET /v1/pets?species=:value&breed=:value&lifeStage=:value
    * GET /v1/pets/:id
    * POST /v1/pets
    * PUT /v1/pets
    * DELETE /v1/pets
* Submit adoption request
    * POST /v1/adoptions
* Track the status of adoption applications by searching by email
    * GET /v1/adoptions?email=:value
* List of adoption requests filterable by status
    * GET /v1/adoptions?status=:value
* Resolve adoption request status
    * POST /v1/adoptions/:id/resolve

2. Input must be validated and respond the appropiate error code when the check fails

3. Use standard HTTP methods and codes
 
**Note:** User creation is not a requirement for this level yet.