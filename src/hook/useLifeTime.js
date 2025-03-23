import { useState, useEffect } from "react";

/**
 * set sth init, get how old it is
 * @param {String} init - init of sth
 * @returns {String} lifetime - lifetime of that thing
 */
export function useLifeTime(init) {
    const [lifeTime, setLifeTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const dateInitial = new Date(init);
            const dateCurrent = new Date();
            const differenceMS = dateCurrent - dateInitial;

            const secsTotal = Math.floor(differenceMS / 1000);
            const days = Math.floor(secsTotal / (60 * 60 * 24));
            const hs = Math.floor((secsTotal % (60 * 60 * 24)) / (60 * 60));
            const mins = Math.floor((secsTotal % (60 * 60)) / 60);
            const secs = secsTotal % 60;

            setLifeTime(`${days} ${days>1? "days" : "day"}, ${hs}:${mins}:${secs}`);
        }, 1000);

        return () => clearInterval(timer);
    }, [init]);

    return {lifeTime};
}