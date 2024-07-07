import { useState } from "react"
import { Typography, useTheme } from "@mui/material"
import { Link } from "react-router-dom"
import { Pix } from "@mui/icons-material"
import FlexBetween from "@/components/FlexBetween"

const Navbar = () => {
    const { palette } = useTheme()
    const [selected, setSelected] = useState("dashboard")

    const navItems = [
        { path: "/", label: "Dashboard", id: "dashboard" },
        { path: "/predictions", label: "Predictions", id: "predictions" }
    ]

    return (
        <FlexBetween mb="0.25rem" padding="0.5rem 0" color={palette.grey[300]}>
            <FlexBetween gap="0.75rem">
                <Pix sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="16px">Cashflow</Typography>
            </FlexBetween>
            <FlexBetween gap="2rem">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        to={item.path}
                        onClick={selected === item.id ? undefined : () => setSelected(item.id)}
                        style={{
                            color: selected === item.id ? "inherit" : palette.grey[700],
                            textDecoration: "inherit",
                            pointerEvents: selected === item.id ? "none" : "auto"
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </FlexBetween>
        </FlexBetween>
    )
}

export default Navbar
