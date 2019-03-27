import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("questions")
export class Question {
    @JsonProperty("q_id",Number)
    q_id: number
    @JsonProperty("q_text",String)
    q_text: string
    @JsonProperty("cat_id",Number)
    cat_id:  number
}
