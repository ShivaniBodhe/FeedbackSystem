import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject('TeacherSubject')
export class TeacherSubject {
    @JsonProperty("subject_code",String)
    subject_code: string
    @JsonProperty("dept_id",Number)
    dept_id: number
    @JsonProperty("semester",Number)
    semester: number
    @JsonProperty("teacher",String)
    teacher: string
    @JsonProperty("optional",Boolean)
    optional: boolean
}
