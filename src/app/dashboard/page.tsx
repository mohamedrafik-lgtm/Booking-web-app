const Dashboard = () =>{
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWNmYTZkMjgxNDljNGQ5MWU1MTNjNjBjNjJhYzRkYiIsIm5iZiI6MTc0MDQ5NjkzMy4yMiwic3ViIjoiNjdiZGUwMjU5NzA5NTBhNGIzNWVhNDY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.jpUlnf6TEajrljwP-y_wfQ6j3SdpxWKruph4x8Pxzmw'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/5000/recommendations?language=en-US&page=1', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
    return (
        <main>
           Dashboard
        </main>
    )
}
export default Dashboard;