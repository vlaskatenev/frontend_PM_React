import React from "react";

export function toInstallStatus(progNameObject, installStatus) {
    const keys = Object.keys(installStatus)
    const toHtmlTag = []
    for (let key = 0; key < keys.length; key++) {
        toHtmlTag.push(
            (
                <p key={progNameObject + installStatus}>
                    {progNameObject[keys[key]]}: {installStatus[keys[key]]}
                </p>
            )
        )
    }
    return toHtmlTag
}
