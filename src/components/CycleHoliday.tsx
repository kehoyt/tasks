import React, { useState } from "react";
import { Button } from "react-bootstrap";
export type Holiday = "🎅" | "🎂" | "👻" | "🎇" | "🥂";

export function CycleHoliday(): JSX.Element {
    const [holiday, changeHoliday] = useState<Holiday>("🎅");

    const BY_YEAR: Record<Holiday, Holiday> = {
        "🎂": "🎇",
        "🎇": "👻",
        "👻": "🎅",
        "🎅": "🥂",
        "🥂": "🎂"
    };

    function advanceByYear(): void {
        changeHoliday(BY_YEAR[holiday]);
    }

    const BY_ALPHABET: Record<Holiday, Holiday> = {
        "🎂": "🎅",
        "🎅": "👻",
        "👻": "🎇",
        "🎇": "🥂",
        "🥂": "🎂"
    };

    function advanceByAlphabet(): void {
        changeHoliday(BY_ALPHABET[holiday]);
    }

    return (
        <div>
            Holiday: {holiday}
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
