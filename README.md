# React-Query
 
---Cache---

- when we use useQuery for the first time , it sets isLoading to true. When we go to the same route again , RQ checks if it is already fetched or not with the help of KEY. If it is already fetched and cached , then it won't set isLoading and directly gives the prevoius data.. But it also understands that there might be some changes in the server data , so it also refetches in the background. If there are changes then it is shown and if not , nothing changes. And if the bg fetching is happening , we can know it by using "isFetching".
Default time for cache is 5 minutes


---stale time---

- Stale data means the data which is already fetched and when we go to the same route again , we get the stale data , not the fresh one
 This is sometimes useful , when we know that out data is not gonna change for a time being.
 So even if the data is cached , we know that there is BG fetching means another request .
 By using stale , we can stop the request for the defined time. When we fetch the data for first time , it is labeled as the fresh until the stale time expires. When the data is fresh , there won't be any new requests
 The default time for stale data is 0


---Refetch Defaults---

1. --refetchOnMount--

- refetchOnMount means the data will be fetched every time we go to that route. Default value is "true".
- the values are [false , true , always]


2. --refetchOnWindowFocus--

- refetchOnWindowFocus is like when we go out of the windowtab and come back , the data is fetched again
- Even without the reloading , we can see the updated data on the screen
- Doesn't matter the data is stale/fresh or not , the fetching will happen
- Its value is "true" by default


3. --refetchInterval--

- Let's say our data changes every second and we need that data on the screen updated every second , we can use refetchInterval
- the default value is false , possible values - [false , {the interval time we want the data to be fetched after}]
- this is called as Polling
- When the window looses focus , the polling pauses. But if we want to fetch data regardless of window the we can use 
 "refetchIntervalInBackground" : true 

  
4. --refetch--

- when we dont want that default 'visit the route and then fetch'/onComponentMount thing and want the data to be fetched manually like after clicking a button or after an event , we use refetch 
- First use "enabled : false" in results = useQuery(.. , .. ,{}) , then destructure { refetch } = results 
- and use the refetch wherever you want



--- OnSuccess and OnError---

--OnSuceess--
: as the name suggests , after the request is successful , we can do the side-effects based on the success , it also gives the data by default 

--OnError--
: as the name suggests , after the request is failed , we can do the side-effects based on the failure , it also gives the error by default , but before the error , RQ will try the request for 3 times to get the success