import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GithubContext } from "../context/github/githubContext";
import { Repos } from "../components/Repos";

export const Profile = () => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const { name: urlName } = useParams();
    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
    }, [])
    if(loading) {
        return <p className="text-center">Загрузка...</p>
    }
    console.log(repos)
    const {
        name, company, avatar_url,
        location, bio, blog,
        login, html_url, followers,
        following, public_repos, public_gists
    } = user;
    return (
        <>
            <Link to="/" className="btn btn-link">На главную</Link>
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img src={avatar_url} style={{width: '150px'}} />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a href={html_url} target="_blank" className="btn btn-dark">Открыть профиль</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: </strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Компания: </strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website: </strong> {blog}
                                </li>}
                            </ul>
                            <div className="badge badge-primary">Подписчики: {followers}</div>
                            <div className="badge badge-success">Подписан: {following}</div>
                            <div className="badge badge-info">Репозиторий: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </>
    )
}