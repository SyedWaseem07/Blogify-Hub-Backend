export const openapi = {
  "openapi": "3.0.0",
  "info": {
    "title": "Blogify Hub",
    "description": "Documentation of api used in simple and awesome blog app named Blogify Hub - Where Ideas Thrive",
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:8000/api/v1/users"
    },
    {
      "url": "http://localhost:8000//api/v1/posts"
    }
  ],
  "tags": [
    {
      "name": "user",
      "description": "Documentation of all api related to user"
    },
    {
      "name": "posts",
      "description": "Documentation of all api related to post"
    }
  ],
  "paths": {
    "/": {
      "get": {
        "tags": [
          "posts"
        ],
        "summary": "Get All Post API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "24678"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"6066-VCJiFwWvatTdk9punCKxwW9h3f0\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:40:08 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ba0d31b2ec3cd1a43cc18f",
                      "title": "Description of Harry Potter series",
                      "category": "Entertainment",
                      "description": "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691890/xwewzq4zg1zzxd7xvgbf.jpg",
                      "creator": "65ba0c74b2ec3cd1a43cc186",
                      "createdAt": "2024-01-31T09:04:49.921Z",
                      "updatedAt": "2024-01-31T09:04:49.921Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0de61a54d96d06b35761",
                      "title": "Wanderlust Diaries: Tales from the Road Less Traveled",
                      "category": "Entertainment",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692071/xcyfrrwzr6igzbmxqhyv.jpg",
                      "creator": "65ba0c74b2ec3cd1a43cc186",
                      "createdAt": "2024-01-31T09:07:50.608Z",
                      "updatedAt": "2024-01-31T09:07:50.608Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0e271a54d96d06b357b9",
                      "title": "Byte Bites: Navigating the Digital World",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692135/am04o3irpnizl96ubvss.jpg",
                      "creator": "65ba0c74b2ec3cd1a43cc186",
                      "createdAt": "2024-01-31T09:08:55.160Z",
                      "updatedAt": "2024-01-31T09:08:55.160Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0e511a54d96d06b35807",
                      "title": "Mindful Musings: Embracing the Present Moment",
                      "category": "Entertainment",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692177/xj996o4ekjiuuocunmeb.jpg",
                      "creator": "65ba0c74b2ec3cd1a43cc186",
                      "createdAt": "2024-01-31T09:09:37.423Z",
                      "updatedAt": "2024-01-31T09:09:37.423Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0e7b1a54d96d06b35857",
                      "title": "Urban Jungle Chronicles: Exploring Cityscapes",
                      "category": "Art",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692219/s8anv3emryalakbwbhfc.jpg",
                      "creator": "65ba0c74b2ec3cd1a43cc186",
                      "createdAt": "2024-01-31T09:10:19.273Z",
                      "updatedAt": "2024-01-31T09:10:19.273Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f251a54d96d06b359a5",
                      "title": "A Tale of Two Cities, Great Expectations",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692390/kyycfpolfuhrgh8mkxms.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:09.413Z",
                      "updatedAt": "2024-01-31T09:13:09.413Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f431a54d96d06b359db",
                      "title": "Tech Tonic: Sipping on the Latest in Technology",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692419/uk40mtte7svfvx4nowxy.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:39.212Z",
                      "updatedAt": "2024-01-31T09:13:39.212Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f8b1a54d96d06b35c9d",
                      "title": "Thread Tales: Fashioned by Life, Styled by You",
                      "category": "Art",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692492/du71ryqlqwtpkf2fogrv.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:14:51.616Z",
                      "updatedAt": "2024-01-31T09:14:51.616Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0fbd1a54d96d06b35db9",
                      "title": "EcoEcho: Living Green in a Modern World",
                      "category": "Business",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692542/mlv6cniscc1303gk8uar.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:15:41.836Z",
                      "updatedAt": "2024-01-31T09:15:41.836Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0ff81a54d96d06b35fa7",
                      "title": "Spark & Spur: Igniting Creativity and Innovation",
                      "category": "Investment",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692600/lp0sz0pxrsf5y8lzjbcq.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:16:40.549Z",
                      "updatedAt": "2024-01-31T09:16:40.549Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba107d1a54d96d06b3615a",
                      "title": "Brewed Bliss: Savoring the Art of Coffee Culture",
                      "category": "Weather",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692733/smpdrzdiifpjkcbrckyz.jpg",
                      "creator": "65ba10311a54d96d06b3605a",
                      "createdAt": "2024-01-31T09:18:53.230Z",
                      "updatedAt": "2024-01-31T09:18:53.230Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba10a31a54d96d06b3624f",
                      "title": "Lens Luxe: Capturing Life's Moments in Pixels",
                      "category": "Uncategorized",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692771/jnzbaslupjehy7wgh9g4.jpg",
                      "creator": "65ba10311a54d96d06b3605a",
                      "createdAt": "2024-01-31T09:19:31.214Z",
                      "updatedAt": "2024-01-31T09:19:31.214Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba11371a54d96d06b36ac8",
                      "title": "Pixel Ponderings: Thoughts in High-Definition",
                      "category": "Investment",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692920/o5t3jdscblebffwmlbhr.jpg",
                      "creator": "65ba10fa1a54d96d06b36a12",
                      "createdAt": "2024-01-31T09:21:59.899Z",
                      "updatedAt": "2024-01-31T09:21:59.899Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba115b1a54d96d06b36b4a",
                      "title": "Serendipity Sojourn: Embracing Life's Unexpected Journeys",
                      "category": "Uncategorized",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692956/eprm1vc4jrhmfpldjkpt.jpg",
                      "creator": "65ba10fa1a54d96d06b36a12",
                      "createdAt": "2024-01-31T09:22:35.947Z",
                      "updatedAt": "2024-01-31T09:22:35.947Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba11e21a54d96d06b372ea",
                      "title": "Trail Tales: Hiking Through Nature's Stories",
                      "category": "Weather",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706693091/wubkyuwhbbrjs1o2h2lc.jpg",
                      "creator": "65ba11af1a54d96d06b37204",
                      "createdAt": "2024-01-31T09:24:50.750Z",
                      "updatedAt": "2024-01-31T09:24:50.750Z",
                      "__v": 0
                    }
                  ],
                  "message": "All post fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      },
      "post": {
        "tags": [
          "posts"
        ],
        "summary": "Create Post API",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "example": "Balance Beam: Navigating Work, Life, and Everything Between"
                  },
                  "category": {
                    "type": "string",
                    "example": "Entertainment"
                  },
                  "description": {
                    "type": "string",
                    "example": "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                  },
                  "thumbnail": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1858"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"742-V+sD05EEzWZA7aw0b2Yp/COkePQ\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:42:03 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 201,
                  "data": {
                    "title": "Balance Beam: Navigating Work, Life, and Everything Between",
                    "category": "Entertainment",
                    "description": "What is Lorem Ipsum?\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\nWhy do we use it?\nIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                    "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706694124/s0sjij0skhukdviir0ja.jpg",
                    "creator": {
                      "_id": "65ba0c74b2ec3cd1a43cc186",
                      "name": "j.k. rowling ",
                      "email": "jkrowling@gmail.com",
                      "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691701/xatsmglmnkpdetzsmavs.jpg",
                      "posts": 6,
                      "__v": 0
                    },
                    "_id": "65ba15eb1a54d96d06b3d09e",
                    "createdAt": "2024-01-31T09:42:03.808Z",
                    "updatedAt": "2024-01-31T09:42:03.808Z",
                    "__v": 0
                  },
                  "message": "Post created successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/register": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Register User API",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "example": "J.K. Rowling "
                  },
                  "email": {
                    "type": "string",
                    "example": "jkrowling@gmail.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "jkr123456"
                  },
                  "avatar": {
                    "type": "string",
                    "format": "binary"
                  },
                  "confirmPassword": {
                    "type": "string",
                    "example": "jkr123456"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "284"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"11c-7q9toPg6VNOsBL3D5N0VEIOwr44\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:01:41 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0c74b2ec3cd1a43cc186",
                    "name": "j.k. rowling ",
                    "email": "jkrowling@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691701/xatsmglmnkpdetzsmavs.jpg",
                    "posts": 0,
                    "__v": 0
                  },
                  "message": "User Registered successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/login": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Login User API",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "email": "jkrowling@gmail.com",
                  "password": "jkr123456"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Set-Cookie": {
                "schema": {
                  "type": "string",
                  "example": "refreshToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJhMGM3NGIyZWMzY2QxYTQzY2MxODYiLCJpYXQiOjE3MDY2OTE3NDgsImV4cCI6MTcwNzU1NTc0OH0.aUMlxAHQsJWX8LMZXZE4dbPLJONinzFzuifGN1njPIw; Path=/; HttpOnly; Secure"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "473"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1d9-qagB7g4uh4/zmnTo8crEPz8HxwQ\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:02:29 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0c74b2ec3cd1a43cc186",
                    "name": "j.k. rowling ",
                    "email": "jkrowling@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691701/xatsmglmnkpdetzsmavs.jpg",
                    "posts": 0,
                    "__v": 0,
                    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJhMGM3NGIyZWMzY2QxYTQzY2MxODYiLCJpYXQiOjE3MDY2OTE3NDgsImV4cCI6MTcwNzU1NTc0OH0.aUMlxAHQsJWX8LMZXZE4dbPLJONinzFzuifGN1njPIw"
                  },
                  "message": "User logged in successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/logout": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Logout User API",
        "requestBody": {
          "content": {}
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Set-Cookie": {
                "schema": {
                  "type": "string",
                  "example": "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "84"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"54-cRDQCqHHs/PqDsd/ZqsWF4q4TZs\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:26:02 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {},
                  "message": "User logged out successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/change-avatar": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Change User Avatar API",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "avatar": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "287"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"11f-6QFyeO0Y7yN6z7vEv7oyGSDAgsc\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:31:18 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba127c1a54d96d06b382d4",
                    "name": "emily dickinson ",
                    "email": "edickinson@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706693478/ytgrgawgfi9qmvdftivz.jpg",
                    "posts": 0,
                    "__v": 0
                  },
                  "message": "Avatar changed successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/edit-profile": {
      "post": {
        "tags": [
          "user"
        ],
        "summary": "Update User Profile API",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "example": {
                  "name": "Agatha Christie ",
                  "email": "achristie@gmail.com",
                  "currentPassword": "ed123456",
                  "newPassword": "ac123456",
                  "confirmNewPassword": "ac123456"
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "482"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"1e2-E0rsiu4JVk3+gcru4j0DF9P2VJc\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:32:59 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba127c1a54d96d06b382d4",
                    "name": "agatha christie ",
                    "email": "achristie@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706693478/ytgrgawgfi9qmvdftivz.jpg",
                    "posts": 0,
                    "__v": 0,
                    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJhMTI3YzFhNTRkOTZkMDZiMzgyZDQiLCJpYXQiOjE3MDY2OTM0MzksImV4cCI6MTcwNzU1NzQzOX0.jgdZ083DN0Ytps7FJtUsAWFRAu1W9bDezQwse9mTfEg"
                  },
                  "message": "User Profile Updated Successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/65ba0c74b2ec3cd1a43cc186": {
      "get": {
        "tags": [
          "user"
        ],
        "summary": "Get User Profile API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "289"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"121-Xd4VwK1QpgB8a2iTnuztYYiq1Cs\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:39:26 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0c74b2ec3cd1a43cc186",
                    "name": "j.k. rowling ",
                    "email": "jkrowling@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691701/xatsmglmnkpdetzsmavs.jpg",
                    "posts": 5,
                    "__v": 0
                  },
                  "message": "User profile fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/65ba0de61a54d96d06b35761": {
      "get": {
        "tags": [
          "posts"
        ],
        "summary": "Get Single Post API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1733"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"6c5-hqdWFtyi8s2DmAE51WHb66P1riY\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:42:44 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0de61a54d96d06b35761",
                    "title": "Wanderlust Diaries: Tales from the Road Less Traveled",
                    "category": "Entertainment",
                    "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                    "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692071/xcyfrrwzr6igzbmxqhyv.jpg",
                    "creator": "65ba0c74b2ec3cd1a43cc186",
                    "createdAt": "2024-01-31T09:07:50.608Z",
                    "updatedAt": "2024-01-31T09:07:50.608Z",
                    "__v": 0
                  },
                  "message": "Post Fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      },
      "patch": {
        "tags": [
          "posts"
        ],
        "summary": "Edit Single Post API",
        "requestBody": {
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "example": "Vintage Vogue Vault: Rediscovering Timeless Fashion"
                  },
                  "description": {
                    "type": "string",
                    "example": "This is an edited post\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                  },
                  "category": {
                    "type": "string",
                    "example": "Art"
                  },
                  "thumbnail": {
                    "type": "string",
                    "format": "binary"
                  }
                }
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "1029"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"405-pt+uG6PXV0OKw3ep+MokYiy/O1k\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:44:53 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0de61a54d96d06b35761",
                    "title": "Vintage Vogue Vault: Rediscovering Timeless Fashion",
                    "category": "Art",
                    "description": "This is an edited post\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                    "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706694294/mfbjo76o1jmdfpyfizvu.jpg",
                    "creator": "65ba0c74b2ec3cd1a43cc186",
                    "createdAt": "2024-01-31T09:07:50.608Z",
                    "updatedAt": "2024-01-31T09:44:53.816Z",
                    "__v": 0
                  },
                  "message": "Post edited successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/65ba0e271a54d96d06b357b9": {
      "delete": {
        "tags": [
          "posts"
        ],
        "summary": "Delete Single Post API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "281"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"119-eG5w3e1dieBhzuaahwf8WIKdT1M\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:45:30 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": {
                    "_id": "65ba0c74b2ec3cd1a43cc186",
                    "name": "j.k. rowling ",
                    "email": "jkrowling@gmail.com",
                    "avatar": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706691701/xatsmglmnkpdetzsmavs.jpg",
                    "posts": 5,
                    "__v": 0
                  },
                  "message": "Post Deleted Successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/categories/Education": {
      "get": {
        "tags": [
          "posts"
        ],
        "summary": "Get Post By Category API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "3363"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"d23-g/cAlhW7mS3dWpE7cbezwX5zXtE\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:45:46 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ba0f431a54d96d06b359db",
                      "title": "Tech Tonic: Sipping on the Latest in Technology",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692419/uk40mtte7svfvx4nowxy.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:39.212Z",
                      "updatedAt": "2024-01-31T09:13:39.212Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f251a54d96d06b359a5",
                      "title": "A Tale of Two Cities, Great Expectations",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692390/kyycfpolfuhrgh8mkxms.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:09.413Z",
                      "updatedAt": "2024-01-31T09:13:09.413Z",
                      "__v": 0
                    }
                  ],
                  "message": "Post Fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    },
    "/users/65ba0ebe1a54d96d06b358ce": {
      "get": {
        "tags": [
          "posts"
        ],
        "summary": "Get Post By Author API",
        "responses": {
          "200": {
            "description": "OK",
            "headers": {
              "X-Powered-By": {
                "schema": {
                  "type": "string",
                  "example": "Express"
                }
              },
              "Access-Control-Allow-Origin": {
                "schema": {
                  "type": "string",
                  "example": "*"
                }
              },
              "Access-Control-Allow-Credentials": {
                "schema": {
                  "type": "boolean",
                  "example": "true"
                }
              },
              "Content-Type": {
                "schema": {
                  "type": "string",
                  "example": "application/json; charset=utf-8"
                }
              },
              "Content-Length": {
                "schema": {
                  "type": "integer",
                  "example": "8299"
                }
              },
              "ETag": {
                "schema": {
                  "type": "string",
                  "example": "W/\"206b-lNVs6ZenmXtpna6Ui67367P5Pyo\""
                }
              },
              "Date": {
                "schema": {
                  "type": "string",
                  "example": "Wed, 31 Jan 2024 09:46:23 GMT"
                }
              },
              "Connection": {
                "schema": {
                  "type": "string",
                  "example": "keep-alive"
                }
              },
              "Keep-Alive": {
                "schema": {
                  "type": "string",
                  "example": "timeout=5"
                }
              }
            },
            "content": {
              "application/json": {
                "schema": {
                  "type": "object"
                },
                "example": {
                  "statusCode": 200,
                  "data": [
                    {
                      "_id": "65ba0ff81a54d96d06b35fa7",
                      "title": "Spark & Spur: Igniting Creativity and Innovation",
                      "category": "Investment",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692600/lp0sz0pxrsf5y8lzjbcq.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:16:40.549Z",
                      "updatedAt": "2024-01-31T09:16:40.549Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0fbd1a54d96d06b35db9",
                      "title": "EcoEcho: Living Green in a Modern World",
                      "category": "Business",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692542/mlv6cniscc1303gk8uar.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:15:41.836Z",
                      "updatedAt": "2024-01-31T09:15:41.836Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f8b1a54d96d06b35c9d",
                      "title": "Thread Tales: Fashioned by Life, Styled by You",
                      "category": "Art",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692492/du71ryqlqwtpkf2fogrv.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:14:51.616Z",
                      "updatedAt": "2024-01-31T09:14:51.616Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f431a54d96d06b359db",
                      "title": "Tech Tonic: Sipping on the Latest in Technology",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692419/uk40mtte7svfvx4nowxy.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:39.212Z",
                      "updatedAt": "2024-01-31T09:13:39.212Z",
                      "__v": 0
                    },
                    {
                      "_id": "65ba0f251a54d96d06b359a5",
                      "title": "A Tale of Two Cities, Great Expectations",
                      "category": "Education",
                      "description": "<h2>What is Lorem Ipsum?</h2><p><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><h2>Why do we use it?</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p><p><br></p>",
                      "thumbnail": "http://res.cloudinary.com/dlolgpv91/image/upload/v1706692390/kyycfpolfuhrgh8mkxms.jpg",
                      "creator": "65ba0ebe1a54d96d06b358ce",
                      "createdAt": "2024-01-31T09:13:09.413Z",
                      "updatedAt": "2024-01-31T09:13:09.413Z",
                      "__v": 0
                    }
                  ],
                  "message": "Post by this author fetched successfully",
                  "success": true
                }
              }
            }
          }
        }
      }
    }
  }
}