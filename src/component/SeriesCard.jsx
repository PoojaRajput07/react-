import styles from "./netflix.module.css";
import styled from "styled-components"
export const SeriesCard=(props)=>{
    const {name, img_url ,rating,description,cast,genre,watch_url}=props.currentelement;
    
    const buttonstyled=styled.button`
        border:2px,solid, black;
        background-color: ${(props)=>props.rating>=8.5?"green":"yellow"};
    `
    return (
        
        <li className={styles.card}>
            <div>
        <img src="lr.webp" height="200px" width="100px"></img>
        </div>
        <div className={styles["card-content"]}>
<h2>name:{name}</h2>
<h3>rating:<span className={`${styles.rating} ${rating>=8.5?styles.superhit:styles.average}`}>{rating}</span></h3>
<p>description:{description}</p>
<p>genre:{genre}</p>
<p>cast :{cast} </p>
<a href={watch_url} target= "_blank"><buttonstyled rating={rating}>watch now</buttonstyled></a>
</div>

    </li>
    );
};