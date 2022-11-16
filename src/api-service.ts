class ApiService {
  public url =
    'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

  public async requestData() {
    const response = await fetch(this.url);
    const commits = await response.json(); // читаем ответ в формате JSON
    console.log(commits);

    return commits;
  }
}
export default new ApiService();
