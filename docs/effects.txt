# Effects

updated
    date:           Last time updated, using the ISO 8601 format (YYYY-MM-DD)
    majorVersion:   The major Minecraft version at the last update 
data
    tag:            The tag of the effect, lowercase and joined with underscores
    name:           The name of the effect
    mcId:           The Minecraft ID of this effect
    desc:
        short:      The short description
        long:       The long description
    type:           Whether this effect is `good` or `bad`
    causes: [
        tag:        The tag of the cause if present, otherwise `null`
        desc:       The description, if no tag available
        potency:    The strength of the effect with this cause
        length:     The length in `M:SS`or `M:SS:ss`
        note:       A note if present, otherwise `null`
    ]       