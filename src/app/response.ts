import { JsonObject, JsonProperty, Any } from "json2typescript";

@JsonObject("Response")
export class Response {
    @JsonProperty("category",Number)
    category: number
    @JsonProperty("teacher",String)
    teacher: string

    @JsonProperty("subject",String)
    subject: string

    @JsonProperty("response",Any)
    response: any // {1:1,2:5,3:6}

    @JsonProperty("dept",Number)
    dept: number

    @JsonProperty("sem",Number)
    sem: number
}
