### Functional Requirements

1. The aim of this version of the API (v1) is to have the following functionality:
* CRUD operations about pet profiles
    * GET /v1/pets?species=:string&breed=:string&lifeStage=:string&page=:number&limit=:number
        * filter and pagination optional, return 10 pets by default
    * GET /v1/pets/:id
    * POST /v1/pets
    * PUT /v1/pets
    * DELETE /v1/pets
* Submit adoption request
    * POST /v1/adoptions
* Track the status of adoption applications by searching by email
    * GET /v1/adoptions?email=:string
* List of adoption requests filterable by status
    * GET /v1/adoptions?status=:string
* Resolve adoption request status
    * POST /v1/adoptions/:id/resolve

2. Input must be validated and respond the appropiate error code when the check fails

3. Use standard HTTP methods and codes

4. The endpoint responses must comply with the following convention:

**Basic Success Response Single item**
For simple GET requests returning a single resource, this response format is often minimal.

``` 
{
  "status": "success",
  "data": {
    "id": 1,
    ...
  }
}

```

**Paginated List Response**
This format to return a list of items, along with pagination metadata.

```
{
  "status": "success",
  "data": [
    {
      "id": 1,
      ...
    },
    {
      "id": 2,
      ...
    }
  ],
  "meta": {
    "page": 1,
    "pageSize": 10
  }
}
```

**Detailed Error Response**
In case of an error, provide a response with a description and error code helpful for debugging.

```
{
  "status": "error",
  "message": "Invalid request parameters",
  "code": 400
}
```

**Creation Success Response**
For a successful POST request that creates a new resource, the response must include a success message and the created resource.

```
{
  "status": "success",
  "message": "Resource created",
  "data": {
    "id": 1,
    ...
  }
}
```

**Update Success Response**
For PUT or PATCH requests that update a resource, the response must include the updated data object.

```
{
  "status": "success",
  "message": "Resource updated",
  "data": {
    "id": 1,
    ...
  }
}
```

**Deletion Success Response**
For DELETE requests, a simple response confirming the action is sufficient.

```
{
  "status": "success",
  "message": "Resource deleted successfully"
}
```
 
**Note:** User creation is not a requirement for this level yet.