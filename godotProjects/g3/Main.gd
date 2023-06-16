extends KinematicBody2D

var velocity := Vector2.ZERO
var speed := 200

func _ready() -> void:
	if OS.has_feature("clone"):
		modulate = Color(1, 0, 0)

func _process(_delta: float) -> void:
	var direction := Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
	velocity = move_and_slide(direction * speed)
